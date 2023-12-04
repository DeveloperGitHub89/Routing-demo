Routing: mapping urls with the component

Navbar.jsx
Home.jsx
About.jsx /about
Contact.jsx /contact

react-router-dom

npm i react-router-dom 

App.js:

react-router-dom provides certain components, using which we can make routing flow

3 components
BrowserRouter: It will be a container/parent component of the entire application
Routes: It will contain all the routes 
Route: It will map a url with a component
Link: a component that is similar to <a> but it will not reload the browser

<BrowserRouter>
	<Navbar></Navbar>
	<Routes>
		<Route path="/" element={<Home/>}></Route>
		<Route path="/about" element={<About/>}></Route>
		<Route path="/contact" element={<Contact/>}></Route>
	</Routes>
</BrowserRouter>

<a href="/">Home</a> will always take a reload in order to send req to mentioned url

pasting link tag and script tag for external css and js
<div class="container">
	<div class="row">
	</div>
</div>

npm i react-bootstrap

<Container>
	<Row>
		<Col></Col>
	</Row>
</Container>

<Button></Button>

<Modal>

<Alert className>

<div class="alert alert-success">









