import React from "react";

function About() {
  return (
    <div className="page container">
      <header className="page-header">
        <h1>About Glen Waverley Tennis Club</h1>
        <p className="page-subtitle">
          A welcoming community where tennis, friendships and fun thrive.
        </p>
      </header>

      <section className="section">
        <h2>Who We Are</h2>
        <p>
          Glen Waverley Tennis Club is a vibrant and inclusive tennis community
          in Melbourne’s eastern suburbs. We provide a friendly environment for
          players of all ages to learn, train and compete. We are situated centrally in Glen Waverley behind the Monash Aquatic and 
          Recreation Centre in Waverley Road, Glen Waverley. It is the oldest tennis club in
          the district, being established in 1906 and upgraded in 2011 to artificial grass
          playing surface. <br/> <br/>
The Club has six courts, five of which are floodlit for night tennis and offers
 competition and social tennis to players of all ages, from beginners to advanced
  players. The spacious clubhouse is carpeted with full kitchen, showers, licensed
   bar and outdoor patio entertaining area. <br/> <br/>

The Club is an Incorporated Association run and maintained by its members who are
 all unpaid volunteers. Only Club members and players from competition teams visiting
  the Club are entitled to play on the courts and use the Club facilities, but
   Club members may be accompanied by visitors a limited number of times each year
    for payment of a visitors fee on each visit. <br/> <br/>

Members may participate in competition and organised social tennis on weekdays
 and weekends, including weekday night tennis, and have use of all facilities
  outside of the organised tennis times. Membership categories include Junior, 
  Student, Senior, Family, Night Competition and Non-Playing. Regular night 
  tennis court hire on Thursday, Friday and Saturday nights is also available
   to both members and non-members. <br/> <br />

New members are welcome. Group and individual tennis coaching is available from our coaches Brad Hasler and Jake Harvey.

        </p>
      </section>

      <section className="section">
        <h2>Our Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>Community</h3>
            <p>We welcome players of all backgrounds and abilities.</p>
          </div>
          <div className="value-card">
            <h3>Respect</h3>
            <p>We foster positive behaviour on and off the court.</p>
          </div>
          <div className="value-card">
            <h3>Fair Play</h3>
            <p>We believe tennis should be played with integrity.</p>
          </div>
          <div className="value-card">
            <h3>Enjoyment</h3>
            <p>Tennis should be fun — win or lose.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Facilities</h2>
        <ul>
          <li>Multiple tennis courts with quality playing surfaces</li>
          <li>LED lighting for night play</li>
          <li>Clubhouse with seating and kitchen</li>
          <li>Online court bookings</li>
          <li>On-site parking and amenities</li>
        </ul>
      </section>
    </div>
  );
}

export default About;
