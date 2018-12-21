class CreateTagsNotes < ActiveRecord::Migration[5.1]
  def change
    create_table :tags_notes do |t|
      t.integer :tag_id
      t.integer :note_id, null: false

      t.timestamps
    end

    add_index :tags_notes, [:tag_id, :note_id], unique: true
    add_index :tags_notes, :tag_id
    add_index :tags_notes, :note_id
  end
end
