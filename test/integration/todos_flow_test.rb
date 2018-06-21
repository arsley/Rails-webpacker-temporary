require 'test_helper'
require 'application_system_test_case'

class TodosFlowTest < ApplicationSystemTestCase
  test 'Add todo then finish todo without reload will be success' do
    visit root_url
    within('.todo-form') do
      fill_in 'Todo:', with: 'added todo'
    end
    click_button 'Add!'
    assert find('.todo-item').find('p').has_content?('added todo')
    assert find('.todo-item').has_button?('Finish!')

    click_button 'Finish!'
    visit root_url
    assert_not find('.todo-form')
  end
end
