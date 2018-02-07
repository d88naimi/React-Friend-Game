import React from "react";

const HelloBootstrap = props => (
    <div>
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button
                        type="button"
                        className="navbar-toggle collapsed"
                        data-toggle="collapse"
                        data-target="#navbar"
                        aria-expanded="false"
                        aria-controls="navbar"
                    >
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                    </button>
                    <a className="navbar-brand" href="/">
                       React Fun
          </a>
                    <form className="navbar-form navbar-left">
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search"
                            />
                        </div>
                        <button type="submit" className="btn btn-default">
                            Submit
            </button>
                    </form>
                </div>
            </div>
        </nav>
        <div className="jumbotron">
            <h1>David's React Fun Game</h1>
            <p>
               Coolio
      
      </p>
        </div>
        <div className="panel panel-default">
            <div className="panel-heading">
              Your Score
      </div>
            <div className="panel-body">
                <h3>Friend Matches: {props.matchScore}</h3>
                <h3>Friend Guesses: {props.guessScore}</h3>
                <p>In this game you pick a Friends, hopefully they pick you too to be their Friend!</p>
      </div>
        </div>
    </div>
);

export default HelloBootstrap;
