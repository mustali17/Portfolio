import React, { Component } from 'react'

class Skills extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            'myskills':['HTML','CSS','JS','PHP','REACT JS','FIREBASE','MIT APP']
        };
    }

    render() {
        return (
            <div className="condiv skills">
            <h1 className="subtopic">My Skills</h1>
            <div class="skills" id="skills">
    
    <div class="skillz">
      <div class="g1">
        <div class="r1">
          <span id="a"></span>
          <label for="range1">HTML</label>
          <input class="range" name="range1" type="range" min="0" max="100" value="90"></input>
        </div>
        <div class="r2">
         
          <label for="range2">CSS</label>
          <input class="range" name="range2" type="range" min="0" max="100" value="80"></input>
        </div>
        <div class="r3">
          
          <label for="range3">Javascript</label>
          <input class="range" name="range3" type="range" min="0" max="100" value="75"></input>
        </div>
      </div>
      <div class="g2">
        <div class="r4">
          
          <label for="range1">React</label>
          <input class="range" name="range4" type="range" min="0" max="100" value="90"></input>
        </div>
        <div class="r5">
          
          <label for="range5">Adobe XD</label>
          <input class="range" name="range5" type="range" min="0" max="100" value="40"></input>
        </div>
        <div class="r6">
          
          <label for="range6">Adobe Photoshop</label>
          <input class="range" name="range6" type="range" min="0" max="100" value="30"></input>
        </div>
      </div>
    </div>
  </div>
            </div>
            )
        }
    }
    
    export default Skills
    