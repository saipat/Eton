# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all

demo1 = User.create!(
  email: 'demouser11@email',
  password: '123456'
)

Notebook.delete_all

notebook1 = Notebook.create!(
  name: 'Fsp',
  user_id: demo1.id
)

notebook2 = Notebook.create!(
  name: 'Physics',
  user_id: demo1.id
)

defaultNotebook = Notebook.create!(
  name: '<inbox>',
  user_id: demo1.id
)

note1 = Note.create!(
  title: 'foxy',
  notebook_id: notebook1.id,
  plain_txt_body: 'hi how are you?',
)

note2 = Note.create!(
  title: 'default note',
  notebook_id: defaultNotebook.id,
  plain_txt_body: 'I am in default note book',
)
