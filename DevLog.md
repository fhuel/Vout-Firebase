# Codename : Vout | DevLog

## Day One [1 Dec 2016]
### What am I doing?
Already started this process too many times. With a lot of technologies, frameworks and so on. Did ask for help. Didn't follow through. All this server side thing seems to be incredibly complicated. Probably the most complicated part is to decide on what to use.
I feel deeply attracted by Ruby, and Rails, for so many reasons. But still, the main objective of all this exercise is to be able to prototype something very quickly.
So... long story short. Today I decided to rm -R everything and start again. From scratch.
I'll be using Firebase for everything that is server side, and React for the client.
I know, not the super optimal solution. But it should be quick at least to prototype. Or at least, that's what I'm hoping.

- Installed and used **create-react-app** to scaffold the React project.

- Watched tutorials for generic [**Firebase Realtime Database**](https://www.youtube.com/watch?v=noB98K6A0TY). Remember about **value** and **child_added**, **child_changed**, **child_removed** events for the **on** method. Also, keep in mind **snap.key**

- Watched tutorials for [**Firebase Authentication**](https://www.youtube.com/watch?v=-OKrloDzGpU) . Remember about the main methods for authentication: creatUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged and signOut .

- Watched tutorials for [**Storage**](https://www.youtube.com/watch?v=SpxHVrpfGgU) . Nothing particularly complex to note. Just watch the documentation for the right methods.

- Watched tutorials for [**Hosting**](https://www.youtube.com/watch?v=meofoNuK3vo).
They say, production grade, deploy to a global CDN with a single command, and every deployed app is provisioned with a SSL certificate. Sounds kinda cool.
  npm install -g firebase-tools
Look at this video again when ready. There are a few complexities. Staging and production and so on... Interesting, but I like a solution where you deploy as a result of a git commit.  .... and this takes me to....

- Watched tutorials for [**Git Deploy**](https://www.youtube.com/watch?v=QLVzozWDYAs) for continuos integration. **VERY INTERESTING**

- Watched tutorials for [**Firebase and React**](https://www.youtube.com/watch?v=QLVzozWDYAs)
Use create-react-app project_name . It seems to rock.
To install firebase on a React project:
  npm install firebase --save

Everything super smooooooooth .
Now the React app launches and after that it updates with data from the Firebase database.


- Watched tutorials for [**Anonymous Sign In**](https://www.youtube.com/watch?v=ApG8L2RKrSI).
Needs to be React-ified .... but quite intuitive. Use anonymous login to store what the users do, and then ask them if they want to register.

- Watched tutorials for [**Modular Loading for optimization**](https://www.youtube.com/watch?v=9jST2cOSHMY)
Basically, use the CDN
Need to know more, definitely more on Modular Builds (in React), Progressive Loading, and Service Worker



## Day Two [2 Dec 2016]
### Still messy
Whatched a lot of articles and videos. Still no idea on how to do modular loading in React. Decided to focus back on React for Beginners videos. There are a few focused on Firebase.

I changed the permission on the firebase database from
  ".read": "auth != null",
to
  ".read": true,
And for '.write' as well

Ok, I implemented a bi-directional binding between the app and the database using the re-base library.
Now I can reflect on the database any changes made on the app client side. Cool stuff!



## Day Three [3 Dec 2016]
### Let's see some clip and follow along
Decided to get back to React for Beginners and follow along to build upon it.
Working fine right now.
- Created a sample component, with specific CSS file associated, and instantiated in App.js
- Understood how props work to pass parameters to Components
- Created a stateless functional component (for when you need just the render method)
- I was able to implement routing! Not as for the videos though, but as the official react-router documentation. (very different!) . Still not sure why you need the #
- Created an helper file. For all those functions that are not tied to a particular component
- Learned about Synthetic Event. It's basically a wrapper that do stuff under the hood. And the event are attached inline.
- Learned about component's internal functions and Ref.
- Learned about context, and how to "surface" router in the context object, so it can be used in other component.
- Learned about state. It's an object that every component has and that keeps all the data for that particular component. Everytime that you what to change something, you don't touch the HTML directly, you change the data in state and the component re-render itself.
- Discovered you can pass functions as a props when you instantiate a component.
- got to video 16



## Day Four [5 Dec 2016]
### Fight the headache
- How to iterate on a list with
  { Object.keys(this.state.fishes).map(key => <Component key{key} details={this.state.components[key]}/>) }
- Remember that if you need access to a method of a component parent you can pass the function in the props. To use it on event:
  onClick={ () => this.props.functionName(this.props.index)}
where index is a key passed (again) as a props
- Learned (actually re-watched) how to use re-base to connect to Firebase database
- Learned about lifecycle.
  - MOUNTING
  - - constructor()
  - - componentWillMount()
  - - render() (required)
  - - componentDidMount()
  - UPDATING
  - - componentWillReceiveProps()
  - - shouldComponentUpdate()
  - - componentWillUpdate(nextProps, nextState)
  - - render()
  - - componentDidUpdate()
  - UNOUNTING
  - - componentWillUnmount()
  - APIs
  - - setState()
  - - forceUpdate()
  - - defaultProps
  - - displayName
  - - propTypes
  - - Instance Properties
  - - props
  - - state

- Learned how to store stuff in local storage. With localStorage.setItem("key", "value"), and get with localStorage.getItem("key"). Use JSON.stringify() to store object as string, since you cannot store objects in localStorage. JSON.parse to retrive it.
- CRUD , ok, but to delete we need to do something like
  componentsName[key] = null;
  this.setState({componentsName});
since we are using Firebase , else we could just use delete()
- ANIMATIOOOOONS. In the videos it uses styles. with npm watch created as a concurrently that launches npm start and npm styluscompile.
  import CSSTransitionGroup from 'react-addons-css-transition-group';
  You need to replace html elements with <CSSTransitionGroup> components, passing component="ul" className="order" transitionName="order" transitionEnterTimeout={300} transitionLeaveTimeout={200} transitionAppear={true}
- PropTypes ... these are great to force a type on props you pass to component. It's not a bad idea to do that for reusable component or in the cleanup phase.
- Authentication!


## Day Five [16 Dec 2016]
### Get back to it
Big idle time. Client work, design work. Let's get back to work here.


## Day Six [20 Dec 2016]
### Get back to it
Started working on the basic elements. Got a good refresh at https://www.fullstackreact.com/30-days-of-react/day-5/
- Created Poll component draft
- Created PollItem component draft
