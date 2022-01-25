// element表示 react元素
const element = {
    type: "h1",
    props: {
        title: "foo",
        children: "Hello",
    },
}
​
const container = document.getElementById("root")

// node表示 DOM元素​
const node = document.createElement(element.type)

node["title"] = element.props.title​
const text = document.createTextNode("")
text["nodeValue"] = element.props.children