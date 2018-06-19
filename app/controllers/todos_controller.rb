class TodosController < ApplicationController
  def index
    @todos = Todo.all
  end

  def create
  end

  def update
  end

  def destory
  end
end
