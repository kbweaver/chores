# Chores [![Build Status](https://travis-ci.org/jochakovsky/chores.svg?branch=master)](https://travis-ci.org/jochakovsky/chores)

I'm building this application because I couldn't find an online chore chart that I liked, and as a way to learn some new web technologies (React, Redux, Phoenix, etc.)

This application is not yet in a workable state. You can track progress towards a minimum viable product [here](https://github.com/jochakovsky/chores/milestone/1).

Demo: https://shrouded-shore-11667.herokuapp.com/

## Prerequisites

  * Node
  * Erlang
  * Elixir
  * Postgres

## Setup

  * Install client-side dependencies with `yarn install`
  * Install Phoenix dependencies with `mix deps.get`
  * Create and migrate your database with `mix ecto.create && mix ecto.migrate`
  * Start Phoenix endpoint with `mix phoenix.server`

Now you can visit [`localhost:4000`](http://localhost:4000) from your browser.
