# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     Chores.Repo.insert!(%Chores.SomeModel{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.

alias Chores.Repo
alias Chores.Chore

[
  %Chore{
    name: "Do the dishes",
    date: %Ecto.Date{year: 2016, month: 7, day: 4}
  },
  %Chore{
    name: "Vacuum",
    date: %Ecto.Date{year: 2016, month: 7, day: 5}
  }
] |> Enum.each(&Repo.insert!(&1))
