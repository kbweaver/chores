defmodule Chores.ChoreControllerTest do
  use Chores.ConnCase

  alias Chores.Chore
  @valid_attrs %{date: %{day: 17, month: 4, year: 2010}, name: "some content"}
  @invalid_attrs %{}

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  test "lists all entries on index", %{conn: conn} do
    conn = get conn, chore_path(conn, :index)
    assert json_response(conn, 200)["data"] == []
  end

  test "shows chosen resource", %{conn: conn} do
    chore = Repo.insert! %Chore{}
    conn = get conn, chore_path(conn, :show, chore)
    assert json_response(conn, 200)["data"] == %{"id" => chore.id,
      "name" => chore.name,
      "date" => chore.date}
  end

  test "renders page not found when id is nonexistent", %{conn: conn} do
    assert_error_sent 404, fn ->
      get conn, chore_path(conn, :show, -1)
    end
  end

  test "creates and renders resource when data is valid", %{conn: conn} do
    conn = post conn, chore_path(conn, :create), chore: @valid_attrs
    assert json_response(conn, 201)["data"]["id"]
    assert Repo.get_by(Chore, @valid_attrs)
  end

  test "does not create resource and renders errors when data is invalid", %{conn: conn} do
    conn = post conn, chore_path(conn, :create), chore: @invalid_attrs
    assert json_response(conn, 422)["errors"] != %{}
  end

  test "updates and renders chosen resource when data is valid", %{conn: conn} do
    chore = Repo.insert! %Chore{}
    conn = put conn, chore_path(conn, :update, chore), chore: @valid_attrs
    assert json_response(conn, 200)["data"]["id"]
    assert Repo.get_by(Chore, @valid_attrs)
  end

  test "does not update chosen resource and renders errors when data is invalid", %{conn: conn} do
    chore = Repo.insert! %Chore{}
    conn = put conn, chore_path(conn, :update, chore), chore: @invalid_attrs
    assert json_response(conn, 422)["errors"] != %{}
  end

  test "deletes chosen resource", %{conn: conn} do
    chore = Repo.insert! %Chore{}
    conn = delete conn, chore_path(conn, :delete, chore)
    assert response(conn, 204)
    refute Repo.get(Chore, chore.id)
  end
end
