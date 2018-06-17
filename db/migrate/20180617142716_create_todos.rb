class CreateTodos < ActiveRecord::Migration[5.2]
  def change
    create_table :todos do |t|
      t.string :content
      t.boolean :finish

      t.timestamps
    end
  end
end
