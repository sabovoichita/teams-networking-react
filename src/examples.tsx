let firstName = "yes";
// firstName = false;
// Error: Type 'boolean' is not assignable to type 'string'

export function getConf() {
  return {
    name: "my conf",
    x: 123,
    ready: true
  };
}

// const conf = getConf();
// console.info(conf.nume);
// Error: Property 'nume' does not exist on type
//   '{ name: string; x: number; ready: boolean; }'

// conf.ready = "not ready";
// Error: Type 'string' is not assignable to type 'boolean'

let color: string;
color = "green";
// color = false; // Type 'boolean' is not assignable to type 'string'

let status: string | number; // Types as Sets
status = "OK";
status = 200;
// status = true; // Type 'boolean' is not assignable to type 'string | number'

type Status = string | number; // custom TYPE
let responseStatus: Status;
type Config = {
  name: string;
  x: number;
  ready?: boolean; // optional prop
};

export function getConfig(name: string): Config {
  return {
    name: "Space",
    x: 1,
    ready: false
  }; // Must return a value OR Property 'x' is missing
}
const conf: Config = getConfig("Voichita");
const config = getConfig("Json"); // if getConfig has return type

// const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
// const element = (
//   <div>
//     <LocalTime />
//   </div>
// );
// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   console.warn(element);
//   root.render(element);
// }

// setInterval(tick, 1000);
// function LocalTime() {
//   return <span>It is {new Date().toLocaleTimeString()}.</span>;
// }

// root.render(
//   <React.StrictMode>
//     {/* <LocalTime /> */}

//     <App />
//   </React.StrictMode>
// );
