import Sim from "./Sim";
import DrawButton from "./DrawButton";

const Sims = () => {
  return (
    <section className='container mx-auto px-4 py-12 aria-label="Simulations"'>
      <Sim
        position='left'
        simId='slider1'
        title='Draw & Doodle'
        iframeSrcMobile='https://openprocessing.org/sketch/1858436/embed/?plusEmbedHash=ZDg5MTM5YWU3NjVhMGVhOWQ0OWE0NzRmOTgyNDRlYzEyNTA1MjQ1ZDRkZGU1MmU3ZGYyMGY5ZGI5ZmZjY2EyYzhmMmVkZTUyMDY2NDJhZmI0MTIyNjFjNWE0NmFjMDdjMTY4MDdkMDJiOWU1ODIwMmFlNjRlOTE3NzU0ZTZhOTdnZE12QldaYUx5ZG1XNU5EK1Vib1c0N2JOT21XQXN6L2dva3poMHZ2MFRNa21IU1BQMUVFeURmZ09KVkpLVlEvYk9LR2JnS3pzNmdxM04zMXFHWmM0QT09'
        iframeSrcDesktop='https://openprocessing.org/sketch/1906372/embed/?plusEmbedHash=ODJlNWExZmMzZmM4NWQyZmY1MmIwZDM0ZjI5ZDhlNTY5ZWY0ODIyYjZlMjIyNWI4NWM2NWViNmY1MjFlYmVjODQ2MTBjNmNmNzZkZTYyYmZhZTg2ZDc4YmFlMDNhMGJlNjk3MTFkMTZkZGJiODEwMGY4ZGYyYzVjZDI2YjZjMjY5citlV0pUSlVpMUN0T3NIS2J2TjVaUEg5eDZoK1AzcXBRelJTa240UHlzV3hLNUI1MUNBMSt6cjZyN000VzlNRTFiZlQxeVpib0NRZkc3QjRWMlBWZz09&plusEmbedFullscreen=true'
        description={
          <>
            <p>Draw & Doodle</p>
            <DrawButton />
          </>
        }
      />
      <Sim
        position='right'
        simId='slider2'
        title='Play'
        iframeSrcMobile='https://openprocessing.org/sketch/XXXX/embed/'
        iframeSrcDesktop='https://openprocessing.org/sketch/XXXX/embed/'
        description={
          <>
            <p>Play</p>
          </>
        }
      />
      <Sim
        position='left'
        simId='slider3'
        title='Read'
        iframeSrcMobile='https://openprocessing.org/sketch/XXXX/embed/'
        iframeSrcDesktop='https://openprocessing.org/sketch/XXXX/embed/'
        description={
          <>
            <p>Read</p>
          </>
        }
      />
    </section>
  );
};

export default Sims;
