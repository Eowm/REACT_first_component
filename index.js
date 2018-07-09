var Movie = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired
  },
  render: function() {
    return (
      React.createElement('li', {}, 
      React.createElement(Header, {text: this.props.item.title}),
      React.createElement(Description, {text: this.props.item.desc}),
      React.createElement(Image, {source: this.props.item.img})
      )
    )
  },
});

var Description = React.createClass({
  propTypes: {
    text: React.PropTypes.string.isRequired
  },
  render: function() {
    return React.createElement('p', {}, this.props.text)
  }
})

var Header = React.createClass({
  propTypes: {
    text: React.PropTypes.string.isRequired
  },
  render: function() {
    return React.createElement('h2', {}, this.props.text)
  }
})

var Image = React.createClass({
  propTypes: {
    source: React.PropTypes.string.isRequired
  },
  render: function() {
    return React.createElement('img', {src:this.props.source})
  }
})

var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    img: 'https://ocdn.eu/pulscms-transforms/1/isDktkqTURBXy9kMmM4YmI4N2QzY2U0ZjI5NmIzNTU3Mjk2ZTg2ZWY2My5qcGVnkZMCAM0B5A'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    img: 'https://cdn.galleries.smcloud.net/t/galleries/gf-CG8m-voqq-EoeZ_krol-lew-664x0-nocrop.jpg'
  },
  {
    id: 3,
    title: 'Władca pierśieni',
    desc: 'Film o hobbitach',
    img: 'https://ssl-gfx.filmweb.pl/q/q/77.0.jpg'
  }
];

var MovieList = React.createClass({
  propTypes: {
    list: React.PropTypes.array.isRequired
  },
  render: function() {
    var moviesElements = this.props.list.map(function(movie) {
      return React.createElement(Movie, {item: movie, key: movie.id});
    });
    return (React.createElement('div', {},
    React.createElement(Header, {text: 'Lista filmów'}),
    React.createElement('ul', {}, moviesElements))
  );
}});

var element = React.createElement(MovieList, {list: movies});
ReactDOM.render(element, document.getElementById('app'));


