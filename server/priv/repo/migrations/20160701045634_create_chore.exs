defmodule Chores.Repo.Migrations.CreateChore do
  use Ecto.Migration

  def change do
    create table(:chores) do
      add :name, :string
      add :date, :date

      timestamps()
    end

  end
end
