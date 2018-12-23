# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all

demo1 = User.create!(
  email: 'q@12.com',
  password: '123456'
)


Notebook.delete_all

defaultNotebook = Notebook.create!(
  name: '<Inbox>',
  user_id: demo1.id
)

notebook1 = Notebook.create!(
  name: 'Fsp',
  user_id: demo1.id
)

notebook2 = Notebook.create!(
  name: 'Physics',
  user_id: demo1.id
)


# Note.delete_all

# note1 = Note.create!(
#   title: 'foxy',
#   notebook_id: notebook1.id,
#   plain_txt_body: 'hi how are you?',
# )

# note2 = Note.create!(
#    title: 'default note',
#   notebook_id: Notebook.first.id,
#   plain_txt_body: 'I am in default note book',
#   tag_ids: [Tag.first.id]
#  )
