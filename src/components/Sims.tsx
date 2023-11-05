import Sim from "./Sim";
import "./Sims.css";
import DrawButton from "./DrawButton";

const Sims = () => {
  return (
    <section className='sims-container' aria-label='Simulations'>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              Nulla quis sem at nibh elementum imperdiet.
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet.
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet.
          </p>
        }
      />
    </section>
  );
};

export default Sims;
