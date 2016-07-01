defmodule Chores.ChoreTest do
  use Chores.ModelCase

  alias Chores.Chore

  @valid_attrs %{date: %{day: 17, month: 4, year: 2010}, name: "some content"}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = Chore.changeset(%Chore{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = Chore.changeset(%Chore{}, @invalid_attrs)
    refute changeset.valid?
  end
end
