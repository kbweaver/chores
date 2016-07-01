defmodule Chores.PageController do
  use Chores.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
