# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :chores,
  ecto_repos: [Chores.Repo]

# Configures the endpoint
config :chores, Chores.Endpoint,
  url: [host: "localhost"],
  # TODO: read from environment variable
  secret_key_base: "7tN6e+DnMDPyCNWxundmGHP4mZXbhf4zKXPPKwXR105wexbDk6hjnEPwF2nu86mB",
  render_errors: [view: Chores.ErrorView, accepts: ~w(html json)],
  pubsub: [name: Chores.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

config :ueberauth, Ueberauth,
  providers: [
    google: {Ueberauth.Strategy.Google, [default_scope: "profile"]}
  ]

config :ueberauth, Ueberauth.Strategy.Google.OAuth,
  client_id: System.get_env("GOOGLE_CLIENT_ID"),
  client_secret: System.get_env("GOOGLE_CLIENT_SECRET")

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
