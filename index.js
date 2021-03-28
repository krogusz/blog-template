const container = document.getElementsByTagName("body")[0];
const blogTitle = "Beauty and the chic";
const headerNavElements = ["HOME", "CATEGORIES", "ABOUT", "CONTACT", "DISCLAIMER", "BLOGLOVIN", "SHOP"]

const Utils = {
  dom: (name, options) => {
    let element = document.createElement(name);

    if (options.parent) {
      options.parent.appendChild(element);
    }

    if (options.text) {
      element.innerHTML = options.text;
    }

    if (options.className) {
      element.className = options.className;
    }

    if (options.id) {
      element.id = options.id;
    }
    return element;
  }
};

class ContentContainer{
    constructor(container){
    this.container = container
    this.render()
  }
  render(){
    const contentContainerOptions = {
      parent: this.container,
      className: "content-container"
    }
    const contentContainer = Utils.dom("div", contentContainerOptions);
    //create header area
    const headerContainer = new HeaderContainer(contentContainer);
  }
}

class HeaderContainer{
  constructor(container){
    this.container = container
    this.render()
  }
  render(){
    const headerContainerOptions = {
      parent: this.container,
      className: "header-container"
    }
    const headerContainer = Utils.dom("header", headerContainerOptions)
    //create header
    const headerOptions = {
      parent: headerContainer,
      className: "title",
      text: blogTitle
    }
    const title = Utils.dom("h1", headerOptions);
    const navigation = new Navigation(headerContainer, headerNavElements);
  }
}

//create class for all navigations
class Navigation{
  constructor(container, elements = [], navType = "header"){
    Object.assign(this, { container, elements, navType });
    this.render()
  }
  render(){
    const elementOptions = {
      parent: this.container,
      className: `${this.navType}-navigation`,
    }
    const element = Utils.dom("nav", elementOptions)
    //create list (<ul>)
    const listOptions = {
      parent: element,
      className: `${this.navType}-list`,
    }
    const list = Utils.dom("ul", listOptions)
    //create list's elements (<li>)
    this.elements.map(listElement => {
      let listElementOptions = {
        parent: list,
        className: `${this.navType}-list-element`,
        text: listElement
      }
      listElement = Utils.dom("li", listElementOptions)
    })
  }
}

const contenContainer = new ContentContainer(container);