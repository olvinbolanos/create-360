import React, {Component} from 'react'
import { Z_BEST_COMPRESSION } from 'zlib'

class Home extends Component {
  state = {
    video: []
  }
  render() {
    return(
      <div>
       <div class="toolbar">
        <div class="tabs">
            <ul>
                <li className="tabitem active"><a href="#box1">Favorites<span></span></a></li>
                <li className="tabitem"><a href="#box2">All<span></span></a></li>
            </ul>
        </div>
      </div>

    <div className="flex-box">
      <div class="item content">
        <div class="itemhead">
          <article class="video">
            <figure>
              <a class="fancybox fancybox.iframe" 
              href="https://cloud.hypno.com/media/5dd0df6f08d52f5f4f73c9bc" 
              target="_blank"
              >
                <img class="videoThumb" src="https://i.imgur.com/YnhfRDj.png" width="350" height="350"/></a>
              </figure>
                <h2 class="videoTitle">Dongalla Ballad</h2>
                </article>
                </div>
              <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                  Like
              </button>
              <span>105</span>
        </div>
      
        <div id="box2" className="box">
          <div class="item">
            <div class="itemhead">
                <article class="video">
                <figure>
                  <a class="fancybox fancybox.iframe" href="https://cloud.hypno.com/media/5dd12be408d52f69905d16c3">
                    <img class="videoThumb" 
                    src="https://i.imgur.com/3a21ZCi.png" 
                    target="_blank" />
                  </a>
                </figure>
                </article>
                <h2>Rob</h2>
            </div>
                <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                  Like
                </button>
              <span>25</span>
        </div>
      </div>

      <div id="box3" className="box">
          <div class="item">
            <div class="itemhead">
                <article class="video">
                <figure>
                  <a class="fancybox fancybox.iframe" href="https://cloud.hypno.com/media/5dd12be408d52f69905d16c3">
                    <img class="videoThumb" 
                    src="https://i.imgur.com/FX4aAIt.jpg" 
                    target="_blank" />
                  </a>
                </figure>
                </article>
                <h2>Rob</h2>
            </div>
                <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                  Like
                </button>
                <span>25</span>
            </div>
        </div>

        <div id="box4">
          <div class="item content">
            <div class="itemhead">
                <article class="video">
                <figure>
                  <a class="fancybox fancybox.iframe" href="https://cloud.hypno.com/media/5dd12be408d52f69905d16c3">
                    <img class="videoThumb" 
                    src="https://i.imgur.com/3a21ZCi.png" 
                    target="_blank" />
                  </a>
                </figure>
                </article>
                <h2>Rob</h2>
            </div>
                <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                  Like
                </button>
                <span>25</span>
            </div>
        </div>

        <div id="box5">
          <div class="item content">
            <div class="itemhead">
                <article class="video">
                <figure>
                  <a class="fancybox fancybox.iframe" href="https://cloud.hypno.com/media/5dd12be408d52f69905d16c3">
                    <img class="videoThumb" 
                    src="https://i.imgur.com/RTr4QXi.jpg" 
                    target="_blank" />
                  </a>
                </figure>
                </article>
                <h2>Rob</h2>
            </div>
                <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                  Like
                </button>
                <span>25</span>
            </div>
        </div>
    </div>
  </div>
    )
  }
}

export default Home



