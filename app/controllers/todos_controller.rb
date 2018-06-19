class TodosController < ApplicationController
  def index
    @todos = Todo.all
  end

  def create
    todo = Todo.new(todo_params)
    if todo.save
      head :created, location: root_path
    else
      head :bad_request, location: root_path
    end
  end

  def update
  end

  def destory
  end

  private

  def todo_params
    params.require(:todo).permit(:content)
  end
end
