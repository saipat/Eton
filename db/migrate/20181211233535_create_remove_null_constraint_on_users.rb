class CreateRemoveNullConstraintOnUsers < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :email
    remove_column :users, :username
    
    add_column :users, :email, :string
    add_column :users, :username, :string
  end
end
