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
<br></br>
  <h2>Mercury has only been visited by two spacecraft—NASA\'s Mariner 10 and MESSENGER. BepiColombo\'s two spacecraft will double that number. The mission includes two science orbiters: ESA\'s Mercury Planetary Orbiter and Japan\'s Mercury Magnetosphere Orbiter.</h2></p>'
)

note2 = Note.create!(
  title: 'Exo Planets',
  notebook_id: defaultNotebook.id,
  plain_txt_body: 'Exoplanets are planets beyond our own solar system. Thousands have been discovered in the past two decades, mostly with NASA\'s Kepler Space Telescope. These worlds come in a huge variety of sizes and orbits. Some are gigantic planets hugging close to their parent stars; others are icy, some rocky.
  These worlds come in a huge variety of sizes and orbits. Some are gigantic planets hugging close to their parent stars; others are icy, some rocky. NASA and other agencies are looking for a special kind of planet: one that\'s the same size as Earth, orbiting a sun-like star in the habitable zone.',

  rich_txt_body: "<h2>Exoplanets</h2> are planets beyond our own solar system. Thousands have been discovered in the past <span style=\"color: rgb(161, 0, 0);\">two decades, mostly with NASA\'s Kepler Space Telescope</span>. These worlds come in a huge variety of sizes and orbits. Some are gigantic planets hugging close to their parent stars; others are icy, some rocky.
 <br></br>
  <p>These worlds come in a huge variety of sizes and orbits. Some are gigantic planets hugging close to their parent stars; others are icy, some rocky. NASA and other agencies are looking for a special kind of planet: one that\'s the same size as Earth, orbiting a sun-like star in the habitable zone.</p>"
 )
 

 note3 = Note.create!(
  title: 'Earth',
  notebook_id: notebook1.id,
  plain_txt_body: 'Earth is the third planet from the Sun and the only astronomical object known to harbor life. According to radiometric dating and other sources of evidence, Earth formed over 4.5 billion years ago.[24][25][26] Earth\'s gravity interacts with other objects in space, especially the Sun and the Moon, Earth\'s only natural satellite. Earth revolves around the Sun in 365.26 days, a period known as an Earth year. During this time, Earth rotates about its axis about 366.26 times.[n 5]

Earth\'s axis of rotation is tilted with respect to its orbital plane, producing seasons on Earth.[27] The gravitational interaction between Earth and the Moon causes ocean tides, stabilizes Earth\'s orientation on its axis, and gradually slows its rotation.[28] Earth is the densest planet in the Solar System and the largest of the four terrestrial planets.[29]

Earth\'s lithosphere is divided into several rigid tectonic plates that migrate across the surface over periods of many millions of years. About 71% of Earth\'s surface is covered with water, mostly by oceans.[30] The remaining 29% is land consisting of continents and islands that together have many lakes, rivers and other sources of water that contribute to the hydrosphere. The majority of Earth\'s polar regions are covered in ice, including the Antarctic ice sheet and the sea ice of the Arctic ice pack. Earth\'s interior remains active with a solid iron inner core, a liquid outer core that generates the Earth\'s magnetic field, and a convecting mantle that drives plate tectonics.',

  rich_txt_body: '<p>Earth is the third planet from the Sun and the only astronomical object known to harbor life. According to radiometric dating and other sources of evidence, Earth formed over 4.5 billion years ago.[24][25][26] Earth\'s gravity interacts with other objects in space, especially the Sun and the Moon, Earth\'s only natural satellite. Earth revolves around the Sun in 365.26 days, a period known as an Earth year. During this time, Earth rotates about its axis about 366.26 times.[n 5]</p>
<br></br>
<h2>Earth\'s axis of rotation is tilted with respect to its orbital plane, producing seasons on Earth.[27] The gravitational interaction between Earth and the Moon causes ocean tides, stabilizes Earth\'s orientation on its axis, and gradually slows its rotation.[28] Earth is the densest planet in the Solar System and the largest of the four terrestrial planets.[29]</h2>
<br></br>
<p>Earth\'s lithosphere is divided into several rigid tectonic plates that migrate across the surface over periods of many millions of years. About 71% of Earth\'s surface is covered with water, mostly by oceans.[30] The remaining 29% is land consisting of continents and islands that together have many lakes, rivers and other sources of water that contribute to the hydrosphere. The majority of Earth\'s polar regions are covered in ice, including the Antarctic ice sheet and the sea ice of the Arctic ice pack. Earth\'s interior remains active with a solid iron inner core, a liquid outer core that generates the Earth\'s magnetic field, and a convecting mantle that drives plate tectonics.</p>'
)

note4 = Note.create!(
  title: 'Jupiter',
  notebook_id: defaultNotebook.id,
  plain_txt_body: 'Nov. 30, 2018: This series of images from NASA\'s Juno spacecraft captures changing cloud formations across Jupiter\'s southern hemisphere. A cloud in the shape of a dolphin appears to be swimming through the cloud bands along the South South Temperate Belt.
<br></br>
This sequence of images was taken between 2:26 p.m. and 2:46 p.m. PDT (5:26 p.m. and 5:56 p.m. EDT) on Oct. 29, 2018, as the spacecraft performed its 16th close flyby of Jupiter. At the time, Juno\'s altitude ranged from about 11,400 to 31,700 miles (18,400 to 51,000 kilometers) from the planet\'s cloud tops, at approximately 32 to 59 degrees south latitude.
<br></br>
Citizen scientists Brian Swift and Seán Doran created this image using data from the spacecraft\'s JunoCam imager.
<br></br>
The fifth planet from the Sun, and the most massive in our solar system, Jupiter has a long history surprising scientists—all the way back to 1610 when Galileo Galilei found the first moons beyond Earth. That discovery changed the way we see the universe.',

  rich_txt_body: "Nov. 30, 2018: This series of images from NASA\'s Juno spacecraft captures changing cloud formations across Jupiter\'s southern hemisphere. A cloud in the shape of a dolphin appears to be swimming through the cloud bands along the South South Temperate Belt.
<br></br>
This sequence of images was taken between 2:26 p.m. and 2:46 p.m. PDT (5:26 p.m. and 5:56 p.m. EDT) on Oct. 29, 2018, as the spacecraft performed its 16th close flyby of Jupiter. At the time, Juno\'s altitude ranged from about 11,400 to 31,700 miles (18,400 to 51,000 kilometers) from the planet\'s cloud tops, at approximately 32 to 59 degrees south latitude.
<br></br>
Citizen scientists Brian Swift and Seán Doran created this image using data from the spacecraft\'s JunoCam imager.
<br></br>
The fifth planet from the Sun, and the most massive in our solar system, Jupiter has a long history surprising scientists—all the way back to 1610 when Galileo Galilei found the first moons beyond Earth. That discovery changed the way we see the universe."
 )

note5 = Note.create!(
  title: 'Magnetic moment',
  notebook_id: notebook2.id,
  plain_txt_body: 'The magnetic moment is a quantity that represents the magnetic strength and orientation of a magnet or other object that produces a magnetic field. Examples of objects that have magnetic moments include: loops of electric current (such as electromagnets), permanent magnets, elementary particles (such as electrons), various molecules, and many astronomical objects (such as many planets, some moons, stars, etc).

  More precisely, the term magnetic moment normally refers to a system\'s magnetic dipole moment, the component of the magnetic moment that can be represented by an equivalent magnetic dipole: a magnetic north and south pole separated by a very small distance. The magnetic dipole component is sufficient for small enough magnets or for large enough distances. Higher order terms (such as the magnetic quadrupole moment) may be needed in addition to the dipole moment for extended objects.

  The magnetic dipole moment of an object is readily defined in terms of the torque that object experiences in a given magnetic field. The same applied magnetic field creates larger torques on objects with larger magnetic moments. The strength (and direction) of this torque depends not only on the magnitude of the magnetic moment but also on its orientation relative to the direction of the magnetic field. The magnetic moment may be considered, therefore, to be a vector. The direction of the magnetic moment points from the south to north pole of the magnet (inside the magnet).

  The magnetic field of a magnetic dipole is proportional to its magnetic dipole moment. The dipole component of an object\'s magnetic field is symmetric about the direction of its magnetic dipole moment, and decreases as the inverse cube of the distance from the object',

  rich_txt_body: '<h3><strong>The magnetic moment is a quantity that represents the magnetic strength and orientation of a magnet or other object that produces a magnetic field.</strong></h3> Examples of objects that have magnetic moments include: loops of electric current (such as electromagnets), permanent magnets, elementary particles (such as electrons), various molecules, and many astronomical objects (such as many planets, some moons, stars, etc).
  <br></br>
  <i>More precisely, the term magnetic moment normally refers to a system\'s magnetic dipole moment, the component of the magnetic moment that can be represented by an equivalent magnetic dipole: a magnetic north and south pole separated by a very small distance. The magnetic dipole component is sufficient for small enough magnets or for large enough distances. Higher order terms (such as the magnetic quadrupole moment) may be needed in addition to the dipole moment for extended objects</i>.
  <br></br>
  The magnetic dipole moment of an object is readily defined in terms of the torque that object experiences in a given magnetic field. The same applied magnetic field creates larger torques on objects with larger magnetic moments. The strength (and direction) of this torque depends not only on the magnitude of the magnetic moment but also on its orientation relative to the direction of the magnetic field. The magnetic moment may be considered, therefore, to be a vector. The direction of the magnetic moment points from the south to north pole of the magnet (inside the magnet).
  <br></br>
  The magnetic field of a magnetic dipole is proportional to its magnetic dipole moment. The dipole component of an object\'s magnetic field is symmetric about the direction of its magnetic dipole moment, and decreases as the inverse cube of the distance from the object'
 )


 note6 = Note.create!(
  title: 'Laws of Thermodynamics',
  notebook_id: notebook2.id,
  plain_txt_body: 'System or Surroundings
In order to avoid confusion, scientists discuss thermodynamic values in reference to a system and its surroundings. Everything that is not a part of the system constitutes its surroundings. The system and surroundings are separated by a boundary. For example, if the system is one mole of a gas in a container, then the boundary is simply the inner wall of the container itself. Everything outside of the boundary is considered the surroundings, which would include the container itself.

The First Law of Thermodynamics
The first law of thermodynamics, also known as Law of Conservation of Energy, states that energy can neither be created nor destroyed; energy can only be transferred or changed from one form to another. For example, turning on a light would seem to produce energy; however, it is electrical energy that is converted.

A way of expressing the first law of thermodynamics is that any change in the internal energy (∆E) of a system is given by the sum of the heat (q) that flows across its boundaries and the work (w) done on the system by the surroundings:

[latex]\Delta E = q + w[/latex]

This law says that there are two kinds of processes, heat and work, that can lead to a change in the internal energy of a system. Since both heat and work can be measured and quantified, this is the same as saying that any change in the energy of a system must result in a corresponding change in the energy of the surroundings outside the system. In other words, energy cannot be created or destroyed. If heat flows into a system or the surroundings do work on it, the internal energy increases and the sign of q and w are positive. Conversely, heat flow out of the system or work done by the system (on the surroundings) will be at the expense of the internal energy, and q and w will therefore be negative.

The Second Law of Thermodynamics
The second law of thermodynamics says that the entropy of any isolated system always increases. Isolated systems spontaneously evolve towards thermal equilibrium—the state of maximum entropy of the system. More simply put: the entropy of the universe (the ultimate isolated system) only increases and never decreases.

A simple way to think of the second law of thermodynamics is that a room, if not cleaned and tidied, will invariably become more messy and disorderly with time – regardless of how careful one is to keep it clean. When the room is cleaned, its entropy decreases, but the effort to clean it has resulted in an increase in entropy outside the room that exceeds the entropy lost.

The Third Law of Thermodynamics
The third law of thermodynamics states that the entropy of a system approaches a constant value as the temperature approaches absolute zero. The entropy of a system at absolute zero is typically zero, and in all cases is determined only by the number of different ground states it has. Specifically, the entropy of a pure crystalline substance (perfect order) at absolute zero temperature is zero. This statement holds true if the perfect crystal has only one state with minimum energy.',

  rich_txt_body: '<h2>System or Surroundings</h2>
In order to avoid confusion, scientists discuss thermodynamic values in reference to a system and its surroundings. Everything that is not a part of the system constitutes its surroundings. The system and surroundings are separated by a boundary. For example, if the system is one mole of a gas in a container, then the boundary is simply the inner wall of the container itself. Everything outside of the boundary is considered the surroundings, which would include the container itself.
<br></br>
<h2>The First Law of Thermodynamics</h2>
The first law of thermodynamics, also known as Law of Conservation of Energy, states that energy can neither be created nor destroyed; energy can only be transferred or changed from one form to another. For example, turning on a light would seem to produce energy; however, it is electrical energy that is converted.
<br></br>
A way of expressing the first law of thermodynamics is that any change in the internal energy (∆E) of a system is given by the sum of the heat (q) that flows across its boundaries and the work (w) done on the system by the surroundings:
<br></br>
<span style=\"color: rgb(161, 0, 0);\">[latex]\Delta E = q + w[/latex]</span>
<br></br>
This law says that there are two kinds of processes, heat and work, that can lead to a change in the internal energy of a system. Since both heat and work can be measured and quantified, this is the same as saying that any change in the energy of a system must result in a corresponding change in the energy of the surroundings outside the system. In other words, energy cannot be created or destroyed. If heat flows into a system or the surroundings do work on it, the internal energy increases and the sign of q and w are positive. Conversely, heat flow out of the system or work done by the system (on the surroundings) will be at the expense of the internal energy, and q and w will therefore be negative.
<br></br>
<h2>The Second Law of Thermodynamics</h2>
<em>The second law of thermodynamics says that the entropy of any isolated system always increases. Isolated systems spontaneously evolve towards thermal equilibrium—the state of maximum entropy of the system. More simply put: the entropy of the universe (the ultimate isolated system) only increases and never decreases.</em>
<br></br>
A simple way to think of the second law of thermodynamics is that a room, if not cleaned and tidied, will invariably become more messy and disorderly with time – regardless of how careful one is to keep it clean. When the room is cleaned, its entropy decreases, but the effort to clean it has resulted in an increase in entropy outside the room that exceeds the entropy lost.
<br></br>
<h2>The Third Law of Thermodynamics</h2>
The third law of thermodynamics states that the entropy of a system approaches a constant value as the temperature approaches absolute zero. The entropy of a system at absolute zero is typically zero, and in all cases is determined only by the number of different ground states it has. <em>Specifically, the entropy of a pure crystalline substance (perfect order) at absolute zero temperature is zero. This statement holds true if the perfect crystal has only one state with minimum energy.</em>'
)

note7 = Note.create!(
  title: 'Laws of Motion',
  notebook_id: notebook1.id,
  plain_txt_body: 'The motion of an aircraft through the air can be explained and described by physical principals discovered over 300 years ago by Sir Isaac Newton. Newton worked in many areas of mathematics and physics. He developed the theories of gravitation in 1666, when he was only 23 years old. Some twenty years later, in 1686, he presented his three laws of motion in the "Principia Mathematica Philosophiae Naturalis." The laws are shown above, and the application of these laws to aerodynamics are given on separate slides.

  Newton\'s first law states that every object will remain at rest or in uniform motion in a straight line unless compelled to change its state by the action of an external force. This is normally taken as the definition of inertia. The key point here is that if there is no net force acting on an object (if all the external forces cancel each other out) then the object will maintain a constant velocity. If that velocity is zero, then the object remains at rest. If an external force is applied, the velocity will change because of the force.

  The second law explains how the velocity of an object changes when it is subjected to an external force. The law defines a force to be equal to change in momentum (mass times velocity) per change in time. Newton also developed the calculus of mathematics, and the "changes" expressed in the second law are most accurately defined in differential forms. (Calculus can also be used to determine the velocity and location variations experienced by an object subjected to an external force.) For an object with a constant mass m, the second law states that the force F is the product of an object\'s mass and its acceleration a:

  F = m * a

  For an external applied force, the change in velocity depends on the mass of the object. A force will cause a change in velocity; and likewise, a change in velocity will generate a force. The equation works both ways.

  The third law states that for every action (force) in nature there is an equal and opposite reaction. In other words, if object A exerts a force on object B, then object B also exerts an equal force on object A. Notice that the forces are exerted on different objects. The third law can be used to explain the generation of lift by a wing and the production of thrust by a jet engine.',

  rich_txt_body: 'The motion of an aircraft through the air can be explained and described by physical principals discovered over 300 years ago by Sir Isaac Newton. Newton worked in many areas of mathematics and physics. He developed the theories of gravitation in 1666, when he was only 23 years old. Some twenty years later, in 1686, he presented his three laws of motion in the "Principia Mathematica Philosophiae Naturalis." The laws are shown above, and the application of these laws to aerodynamics are given on separate slides.
  <br></br>
  Newton\'s first law states that <em><strong>every object will remain at rest or in uniform motion in a straight line unless compelled to change its state by the action of an external force.</strong></em> This is normally taken as the definition of inertia. The key point here is that if there is no net force acting on an object (if all the external forces cancel each other out) then the object will maintain a constant velocity. If that velocity is zero, then the object remains at rest. If an external force is applied, the velocity will change because of the force.
  <br></br>
  The second law explains <em><strong>how the velocity of an object changes when it is subjected to an external force</em></strong>. The law defines a force to be equal to change in momentum (mass times velocity) per change in time. Newton also developed the calculus of mathematics, and the "changes" expressed in the second law are most accurately defined in differential forms. (Calculus can also be used to determine the velocity and location variations experienced by an object subjected to an external force.) For an object with a constant mass m, the second law states that the force F is the product of an object\'s mass and its acceleration a:
  <br></br>
  F = m * a
  <br></br>
  For an external applied force, the change in velocity depends on the mass of the object. A force will cause a change in velocity; and likewise, a change in velocity will generate a force. The equation works both ways.
  <br></br>
  The third law states that<em><strong> for every action (force) in nature there is an equal and opposite reaction</em></strong>. In other words, if object A exerts a force on object B, then object B also exerts an equal force on object A. Notice that the forces are exerted on different objects. The third law can be used to explain the generation of lift by a wing and the production of thrust by a jet engine.'
)



Tag.delete_all

tag1 = Tag.create!(
  user_id: demo1.id,
  tag_name: 'science',
  note_ids: [note1.id]
)

tag2 = Tag.create!(
  user_id: demo1.id,
  tag_name: 'Planets',
  note_ids: [note2.id]
)

tag3 = Tag.create!(
  user_id: demo1.id,
  tag_name: 'Earth',
  note_ids: [note3.id]
)

tag4 = Tag.create!(
  user_id: demo1.id,
  tag_name: 'Motion',
  note_ids: [note7.id]
)

tag5 = Tag.create!(
  user_id: demo1.id,
  tag_name: 'Dynamics',
  note_ids: [note6.id]
)

tag6 = Tag.create!(
  user_id: demo1.id,
  tag_name: 'Jupiter',
  note_ids: [note4.id]
)

tag7 = Tag.create!(
  user_id: demo1.id,
  tag_name: 'Laws of magnetic moment',
  note_ids: [note5.id]
)
