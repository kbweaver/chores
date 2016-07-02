FROM elixir:1.3.0

ENV PHOENIX_VERSION 1.1.4

# install the Phoenix Mix archive
RUN mix archive.install --force https://github.com/phoenixframework/archives/raw/master/phoenix_new-$PHOENIX_VERSION.ez
RUN mix local.hex --force

WORKDIR /usr/src/app

COPY mix.exs /usr/src/app/mix.exs
COPY mix.lock /usr/src/app/mix.lock
RUN mix deps.get
RUN mix do compile

COPY . /usr/src/app

ENV PORT 4000
EXPOSE 4000
CMD ["mix", "phoenix.server"]
