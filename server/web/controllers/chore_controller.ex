defmodule Chores.ChoreController do
  use Chores.Web, :controller

  alias Chores.Chore

  def index(conn, _params) do
    chores = Repo.all(Chore)
    render(conn, "index.json", chores: chores)
  end

  def create(conn, %{"chore" => chore_params}) do
    changeset = Chore.changeset(%Chore{}, chore_params)

    case Repo.insert(changeset) do
      {:ok, chore} ->
        conn
        |> put_status(:created)
        |> put_resp_header("location", chore_path(conn, :show, chore))
        |> render("show.json", chore: chore)
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render(Chores.ChangesetView, "error.json", changeset: changeset)
    end
  end

  def show(conn, %{"id" => id}) do
    chore = Repo.get!(Chore, id)
    render(conn, "show.json", chore: chore)
  end

  def update(conn, %{"id" => id, "chore" => chore_params}) do
    chore = Repo.get!(Chore, id)
    changeset = Chore.changeset(chore, chore_params)

    case Repo.update(changeset) do
      {:ok, chore} ->
        render(conn, "show.json", chore: chore)
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render(Chores.ChangesetView, "error.json", changeset: changeset)
    end
  end

  def delete(conn, %{"id" => id}) do
    chore = Repo.get!(Chore, id)

    # Here we use delete! (with a bang) because we expect
    # it to always work (and if it does not, it will raise).
    Repo.delete!(chore)

    send_resp(conn, :no_content, "")
  end
end
