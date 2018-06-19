class Todo < ApplicationRecord
  validates :content, presence: true
  validates :finish,  inclusion: { in: [false, true] }
end
