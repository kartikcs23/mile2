import React from 'react';

const AboutUs = () => {
  return (
    <div className="about-us-container">
                <div className="navbar-spacer"></div>

      <h1>About Us</h1>

      <section className="business-overview">
        
        <h2>Our Story</h2>
        <p>
          Welcome to FoodieDelight, a place where passion for food meets
          exceptional quality. Founded in 1958, our restaurant has become a
          local favorite, known for its commitment to using the finest ingredients and crafting
          dishes that delight the senses. Our mission is simple: to create a dining
          experience that feels like home, whether you're enjoying a casual meal with family or celebrating
          a special occasion.
        </p>
        <p>
          We believe in the power of good food to bring people together. From our farm-to-table approach
          to our commitment to sustainability, we are dedicated to making every meal an unforgettable
          experience.
        </p>
      </section>

      <section className="team-introduction">
        <h2>Meet Our Team</h2>

        <div className="team-members">
          <div className="team-member">
            <img
              src="https://img.freepik.com/premium-photo/professional-chef-man-showing-sign-delicious-male-chef-white-uniform-with-perfect-sign_763111-6717.jpg"
              alt="Chef Kartik"
              className="team-member-img"
            />
            <div className="team-member-info">
              <h3>Chef Kartik</h3>
              <p>Executive Chef with 10+ years of experience in creating innovative dishes.</p>
            </div>
          </div>

          <div className="team-member">
            <img
              src="https://th.bing.com/th/id/OIP.gPndktaXszyOvlVhA7vdngAAAA?w=202&h=269&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt="Chef Sanvi"
              className="team-member-img"
            />
            <div className="team-member-info">
              <h3>Chef Sanvi</h3>
              <p>Pastry Chef specializing in elegant, mouthwatering desserts.</p>
            </div>
          </div>

          <div className="team-member">
            <img
              src="https://th.bing.com/th/id/OIP.ETmVgPYNlTaUBRaTVMNeDgHaE7?pid=ImgDet&w=179&h=119&c=7&dpr=1.3"
              alt="Chef shreya"
              className="team-member-img"
            />
            <div className="team-member-info">
              <h3>Chef shreya</h3>
              <p>Head Chef with a passion for fusion cuisine and local flavors.</p>
            </div>
          </div>

          <div className="team-member">
            <img
              src="https://img.freepik.com/premium-photo/professional-chef-man-showing-sign-delicious-male-chef-white-uniform-with-perfect-sign_763111-6659.jpg"
              alt="Chef Abhay"
              className="team-member-img"
            />
            <div className="team-member-info">
              <h3> Chef Abhay</h3>
              <p>Our Chef, a culinary mastermind in creating savory dishes.</p>
            </div>
          </div>

          <div className="team-member">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuZc6C2De6P5MePXS2cyCKB3CxE0QhKAah6A&s"
              alt="Chef karthik"
              className="team-member-img"
            />
            <div className="team-member-info">
              <h3>Chef Karthik</h3>
              <p>A talented sous chef focused on vegan and vegetarian dishes.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="unique-aspects">
        <h2>What Makes Us Unique</h2>
        <ul>
          <li><strong>Fresh, Local Ingredients:</strong> We source our produce and meats from local farms to ensure the highest quality in every dish.</li>
          <li><strong>Sustainable Practices:</strong> We're committed to sustainability in everything we do, from sourcing to packaging.</li>
          <li><strong>Creative Menus:</strong> Our menu is designed to surprise and delight, with a mix of traditional flavors and modern twists.</li>
          <li><strong>Customer Focused:</strong> We treat every guest like family and strive to provide exceptional service every time you visit.</li>
        </ul>
      </section>
    </div>
  );
};

export default AboutUs;
