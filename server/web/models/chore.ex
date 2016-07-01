defmodule Chores.Chore do
  use Chores.Web, :model

  schema "chores" do
    field :name, :string
    field :date, Ecto.Date

    timestamps()
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:name, :date])
    |> validate_required([:name, :date])
  end
end
