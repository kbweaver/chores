defmodule Chores.ChoreView do
  use Chores.Web, :view

  def render("index.json", %{chores: chores}) do
    %{data: render_many(chores, Chores.ChoreView, "chore.json")}
  end

  def render("show.json", %{chore: chore}) do
    %{data: render_one(chore, Chores.ChoreView, "chore.json")}
  end

  def render("chore.json", %{chore: chore}) do
    %{id: chore.id,
      name: chore.name,
      date: chore.date}
  end
end
