class CreateTags < ActiveRecord::Migration[5.1]
  def change
    create_table :tags do |t|
      t.integer :user_id, null: false
      t.string :tag_name, null: false


      t.timestamps
    end

    add_index :tags, [:user_id, :tag_name], unique: true
  end
end
