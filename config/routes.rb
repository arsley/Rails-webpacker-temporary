Rails.application.routes.draw do
  root to: 'todos#index'

  resources :todo, only: %i[create update destroy]
end
