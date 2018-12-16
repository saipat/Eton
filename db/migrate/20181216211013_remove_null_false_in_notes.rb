class RemoveNullFalseInNotes < ActiveRecord::Migration[5.1]
  def change
    remove_column :notes, :plain_txt_body
    remove_column :notes, :rich_txt_body

    add_column :notes, :plain_txt_body, :text
    add_column :notes, :rich_txt_body, :text
  end
end
