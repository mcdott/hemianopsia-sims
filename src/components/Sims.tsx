import Sim from "./Sim";
import "./Sims.css";
import DrawButton from "./DrawButton";

const Sims = () => {
  return (
    <section className='sims-container' aria-label='Simulations'>
      <h1 className='sims-heading'>
        To better understand hemianopsia —{" "}
        <span className='sims-heading-accented'>draw, play, read</span>
      </h1>
      <p className='sims-intro'>
        Hemianopsia - the loss of half of one's field of vision - often goes
        unnoticed by those not affected by it, yet it presents distinct
        challenges to those who live with it every day. These interactive
        simulations offer a window into the visual experience of hemianopsia.
        <br />
        Dive in and see for yourself how a simulation is worth a thousand words.
      </p>
      <Sim
        position='left'
        simId='sim1'
        title='Draw'
        titleNonAccented='a picture'
        iframeSrcMobile='https://openprocessing.org/sketch/1921819/embed/?plusEmbedHash=OTY4MzlmNzYxYzk4MTU4MzNhZDIyNDdhYzg1NTBkZjQwOWJiYmJjZmM0NmEyZmY5M2I4MGIyOWZiYzgwYTRmYjA1YjY4MTgyMjkzMjk1NzRlZTEzNzY4ZDVmMjE0NWUxZmQzNjA0Mjk3MTRjZjZlOWE3YWQ3YmJkMGY4MmU5ZTZ0ZTlMUG41VjRrR1lEU3VGd3hFN0Y0K2tYZllsQjkvQ20zWGdTMjJUeDdvZG1VWENLT0gvNU5aaCtNdkVwMlJTVUFWRnlYbFd1cEdOU05DRlBaMTNydz09&plusEmbedFullscreen=true'
        iframeSrcDesktop='https://openprocessing.org/sketch/1921815/embed/?plusEmbedHash=ZDhlODUzN2M1ZThkZjQ5ZmYzYmQxMTA2ZDkyMjdlMDNkMzJkY2FiY2Q0N2Y2YTdhMTY1MWQ3NGI2ODYxOTFjYzI2N2I0MzIwOWE0NzBmNWJjMGQ4ZDliYTExNTI2MzVmZmVkMmEyZGQ5ZWVmNDY2ZTkyZTVkNTQxMjY1NGUxNTdlS2xmZjVuSVZGcjJ4MVBNTTJFZFIxcTNocWVmZE8wYWhhSSt1Q1RJVmIwMVhzRHpzdmhRSDl4ejBFWUNqSGpqQktsRGUwS3hoMEdheU1nYXY0VzlUdz09&plusEmbedFullscreen=true'
        description={
          <>
            <p className='mb-4'>
              Unleash your creativity, but with a twist. See how memory and
              perception come into play when drawing with hemianopsia.
            </p>
            <DrawButton />
          </>
        }
      />
      <Sim
        position='right'
        simId='sim2'
        title='Play'
        titleNonAccented='a game'
        iframeSrcMobile='https://openprocessing.org/sketch/XXXX/embed/'
        iframeSrcDesktop='https://openprocessing.org/sketch/XXXX/embed/'
        description={
          <p className='mb-4'>
            Enter the arena where your visual field is put to the test.
            Challenge yourself to adapt and react when part of the screen is
            unseen, and discover how hemianopsia can change the way you play.
          </p>
        }
      />
      <Sim
        position='left'
        simId='sim3'
        title='Read'
        titleNonAccented='a story'
        iframeSrcMobile='https://openprocessing.org/sketch/1921855/embed/?plusEmbedHash=NWU0OWZhODAwODkyYjA2ZTNkOWFmMjMwNTNiM2UwNTA4NTZlNzNjMjA1NjFmNWU5NWQwYjFmYmViMWMxNzkxOGU5MTE2MTI3YWM0ZmNlNTEyM2VkZmVhOTU4NGMwYTE1M2M1ZGZmYjk1MzUzZjMzZjgwNjdhYWZhNGM5NzNkMWI1L2FCNHFVd0ZjVy9wMTV2WExqOEhBZkt0Z0g1SG9UalpkckFMSFdhZDZFM2RZRXRHVkpVd25hL1VpQ3kxZE51aXpkK25HdkFOSjN0VDI3VEYrM0RHUT09&plusEmbedFullscreen=true'
        iframeSrcDesktop='https://openprocessing.org/sketch/1921891/embed/?plusEmbedHash=MGJjNTliY2ZiMTQ1NzBhMmNhMWJlMDc4ZTc1YzVlMDBkNDliNjI2NDYxYmMyMDRmMDljZGRjYzNlMDdjY2YxZDQzNDIxYWQ5NTVjNTEwMDU5YmVjMjI2NTUwZTI0ZDJlNDgyYWRiZWY2YjQ2ZjE5OWVkODE3MWUzZGU0YWIxZTNFRGdVcllNL2FmREE4SUZUUjBEWE90M0haKzdUNnMyU3BzeXJaZVZGNkRiZ0NQWGI3ckthaE8wMWpzb1lxM1FWY0lEY2JQMjVnS2FHb2VLNlI3VFFYQT09&plusEmbedFullscreen=true'
        description={
          <p className='mb-4'>
            Keep your eyes on the prize — the mouse pointer, that is! Glide it
            under each word and let it lead you to the next line; that's how
            this simulation works. Toggle to see how sentences unfold
            differently with right and with left hemianopsia.
          </p>
        }
      />
    </section>
  );
};

export default Sims;
