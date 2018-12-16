class CreateNotes < ActiveRecord::Migration[5.1]
  def change
    create_table :notes do |t|
      t.string :title, null: false
      t.integer :notebook_id, null: false
      t.text :plain_txt_body, null: false
      t.text :rich_txt_body, null: false

      t.timestamps
    end

    add_index :notes, :title 
    add_index :notes, :plain_txt_body
    add_index :notes, :rich_txt_body
  end
end
