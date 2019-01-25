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
  name: 'Astronomy',
  user_id: demo1.id
)

notebook2 = Notebook.create!(
  name: 'Physics',
  user_id: demo1.id
)




Note.delete_all

note1 = Note.create!(
  title: 'Planets',
  notebook_id: notebook1.id,
  plain_txt_body: 'Oct. 20, 2018: The latest mission to Mercury is on its way. The ESA-JAXA BepiColombo mission to Mercury blasted off on an Ariane 5 rocket from Europe\'s Spaceport in Kourou, French Guiana, on an international mission to study our solar system\'s innermost planet.

  Mercury has only been visited by two spacecraft—NASA\'s Mariner 10 and MESSENGER. BepiColombo\'s two spacecraft will double that number. The mission includes two science orbiters: ESA\'s Mercury Planetary Orbiter and Japan\'s Mercury Magnetosphere Orbiter.',

  rich_txt_body: '<h1>Oct. 20, 2018: </h1> <p>The latest mission to Mercury is on its way. The ESA-JAXA BepiColombo mission to Mercury blasted off on an Ariane 5 rocket from Europe\'s Spaceport in Kourou, French Guiana, on an international mission to study our solar system\'s innermost planet.

  <h2>Mercury has only been visited by two spacecraft—NASA\'s Mariner 10 and MESSENGER. BepiColombo\'s two spacecraft will double that number. The mission includes two science orbiters: ESA\'s Mercury Planetary Orbiter and Japan\'s Mercury Magnetosphere Orbiter.</h2></p>'
)

note2 = Note.create!(
  title: 'Exo Planets',
  notebook_id: defaultNotebook.id,
  plain_txt_body: 'Exoplanets are planets beyond our own solar system. Thousands have been discovered in the past two decades, mostly with NASA\'s Kepler Space Telescope. These worlds come in a huge variety of sizes and orbits. Some are gigantic planets hugging close to their parent stars; others are icy, some rocky.
  These worlds come in a huge variety of sizes and orbits. Some are gigantic planets hugging close to their parent stars; others are icy, some rocky. NASA and other agencies are looking for a special kind of planet: one that\'s the same size as Earth, orbiting a sun-like star in the habitable zone.',

  rich_txt_body: "<h2>Exoplanets</h2> are planets beyond our own solar system. Thousands have been discovered in the past <span style=\"color: rgb(161, 0, 0);\">two decades, mostly with NASA\'s Kepler Space Telescope</span>. These worlds come in a huge variety of sizes and orbits. Some are gigantic planets hugging close to their parent stars; others are icy, some rocky.
  <br />
  <br />
  <p>These worlds come in a huge variety of sizes and orbits. Some are gigantic planets hugging close to their parent stars; others are icy, some rocky. NASA and other agencies are looking for a special kind of planet: one that\'s the same size as Earth, orbiting a sun-like star in the habitable zone.</p>"
 )
 

 note3 = Note.create!(
  title: 'Earth',
  notebook_id: notebook1.id,
  plain_txt_body: 'Earth is the third planet from the Sun and the only astronomical object known to harbor life. According to radiometric dating and other sources of evidence, Earth formed over 4.5 billion years ago.[24][25][26] Earth\'s gravity interacts with other objects in space, especially the Sun and the Moon, Earth\'s only natural satellite. Earth revolves around the Sun in 365.26 days, a period known as an Earth year. During this time, Earth rotates about its axis about 366.26 times.[n 5]

Earth\'s axis of rotation is tilted with respect to its orbital plane, producing seasons on Earth.[27] The gravitational interaction between Earth and the Moon causes ocean tides, stabilizes Earth\'s orientation on its axis, and gradually slows its rotation.[28] Earth is the densest planet in the Solar System and the largest of the four terrestrial planets.[29]

Earth\'s lithosphere is divided into several rigid tectonic plates that migrate across the surface over periods of many millions of years. About 71% of Earth\'s surface is covered with water, mostly by oceans.[30] The remaining 29% is land consisting of continents and islands that together have many lakes, rivers and other sources of water that contribute to the hydrosphere. The majority of Earth\'s polar regions are covered in ice, including the Antarctic ice sheet and the sea ice of the Arctic ice pack. Earth\'s interior remains active with a solid iron inner core, a liquid outer core that generates the Earth\'s magnetic field, and a convecting mantle that drives plate tectonics.',

  rich_txt_body: '<p>Earth is the third planet from the Sun and the only astronomical object known to harbor life. According to radiometric dating and other sources of evidence, Earth formed over 4.5 billion years ago.[24][25][26] Earth\'s gravity interacts with other objects in space, especially the Sun and the Moon, Earth\'s only natural satellite. Earth revolves around the Sun in 365.26 days, a period known as an Earth year. During this time, Earth rotates about its axis about 366.26 times.[n 5]</p>

<h2>Earth\'s axis of rotation is tilted with respect to its orbital plane, producing seasons on Earth.[27] The gravitational interaction between Earth and the Moon causes ocean tides, stabilizes Earth\'s orientation on its axis, and gradually slows its rotation.[28] Earth is the densest planet in the Solar System and the largest of the four terrestrial planets.[29]</h2>
<br />
<p>Earth\'s lithosphere is divided into several rigid tectonic plates that migrate across the surface over periods of many millions of years. About 71% of Earth\'s surface is covered with water, mostly by oceans.[30] The remaining 29% is land consisting of continents and islands that together have many lakes, rivers and other sources of water that contribute to the hydrosphere. The majority of Earth\'s polar regions are covered in ice, including the Antarctic ice sheet and the sea ice of the Arctic ice pack. Earth\'s interior remains active with a solid iron inner core, a liquid outer core that generates the Earth\'s magnetic field, and a convecting mantle that drives plate tectonics.</p>'
)

note4 = Note.create!(
  title: 'Jupiter',
  notebook_id: defaultNotebook.id,
  plain_txt_body: 'Nov. 30, 2018: This series of images from NASA\'s Juno spacecraft captures changing cloud formations across Jupiter\'s southern hemisphere. A cloud in the shape of a dolphin appears to be swimming through the cloud bands along the South South Temperate Belt.

This sequence of images was taken between 2:26 p.m. and 2:46 p.m. PDT (5:26 p.m. and 5:56 p.m. EDT) on Oct. 29, 2018, as the spacecraft performed its 16th close flyby of Jupiter. At the time, Juno\'s altitude ranged from about 11,400 to 31,700 miles (18,400 to 51,000 kilometers) from the planet\'s cloud tops, at approximately 32 to 59 degrees south latitude.

Citizen scientists Brian Swift and Seán Doran created this image using data from the spacecraft\'s JunoCam imager.

The fifth planet from the Sun, and the most massive in our solar system, Jupiter has a long history surprising scientists—all the way back to 1610 when Galileo Galilei found the first moons beyond Earth. That discovery changed the way we see the universe.',

  rich_txt_body: "Nov. 30, 2018: This series of images from NASA\'s Juno spacecraft captures changing cloud formations across Jupiter\'s southern hemisphere. A cloud in the shape of a dolphin appears to be swimming through the cloud bands along the South South Temperate Belt.

This sequence of images was taken between 2:26 p.m. and 2:46 p.m. PDT (5:26 p.m. and 5:56 p.m. EDT) on Oct. 29, 2018, as the spacecraft performed its 16th close flyby of Jupiter. At the time, Juno\'s altitude ranged from about 11,400 to 31,700 miles (18,400 to 51,000 kilometers) from the planet\'s cloud tops, at approximately 32 to 59 degrees south latitude.

Citizen scientists Brian Swift and Seán Doran created this image using data from the spacecraft\'s JunoCam imager.

The fifth planet from the Sun, and the most massive in our solar system, Jupiter has a long history surprising scientists—all the way back to 1610 when Galileo Galilei found the first moons beyond Earth. That discovery changed the way we see the universe."
 )



Tag.delete_all

tag1 = Tag.create!(
  user_id: demo1.id,
  tag_name: 'science',
  note_ids: [note1.id]
)

tag2 = Tag.create!(
  user_id: demo1.id,
  tag_name: 'planets',
  note_ids: [note2.id]
)

tag3 = Tag.create!(
  user_id: demo1.id,
  tag_name: 'space',
  note_ids: [note3.id]
)
