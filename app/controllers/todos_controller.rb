class TodosController < ApplicationController
  def index
    @todos = Todo.all.order('created_at DESC')
  end

  def create
    todo = Todo.new(todo_params)
    if todo.save
      render json: Todo.last, status: :created, location: root_path
    else
      head :bad_request, location: root_path
    end
  end

  def update
  end

  def destroy
    todo = Todo.find(params[:id])
    todo.delete
    head :ok, location: root_path
  end

  private

  def todo_params
    params.require(:todo).permit(:content)
  end
end
