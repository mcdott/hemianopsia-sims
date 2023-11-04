import "./Hemianopsia.css";

const Hemianopsia = () => {
  return (
    <div className='container'>
      <div className='grid-container'>
        <article className='main-content'>
          <h1 className='main-heading'>Understanding Hemianopsia</h1>
          <p className='main-paragraph'>
            Hemianopsia, also known as hemianopia, is a visual impairment that
            affects millions of people worldwide. It is a complex condition that
            can be challenging to understand, but knowing more about it can help
            improve the lives of those affected, hence the simulations above.
          </p>
          <h2 className='sub-heading'>What is Hemianopsia?</h2>
          <p className='main-paragraph'>
            Hemianopsia is a vision impairment characterized by the loss of half
            the field of vision in one or both eyes. It can occur in different
            forms, such as homonymous hemianopsia, where the same side of the
            visual field is affected in both eyes, or heteronymous hemianopsia,
            where the opposite sides of the visual field are affected.
            Hemianopsia can significantly impact a person's daily life, making
            tasks like reading, driving, and navigating through spaces more
            difficult.
          </p>
          <h2 className='sub-heading'>What Causes Hemianopsia?</h2>
          <ul className='main-list'>
            <li className='list-item'>
              Stroke: A stroke occurs when the blood supply to a part of the
              brain is interrupted or reduced. This can lead to cell death in
              the affected area and may result in hemianopsia.
            </li>
            <li className='list-item'>
              Brain injury: Traumatic brain injuries, such as those sustained in
              accidents or falls, can cause damage to the brain's visual pathway
              and lead to hemianopsia.
            </li>
            <li className='list-item'>
              Tumors: Brain tumors, both malignant and benign, can cause
              hemianopsia if they press on or damage the visual pathway.
            </li>
            <li className='list-item'>
              Neurological disorders: Certain neurological disorders, such as
              multiple sclerosis or epilepsy, can cause damage to the brain's
              visual pathway and lead to hemianopsia.
            </li>
          </ul>
          <h2 className='sub-heading'>Types of Hemianopsia</h2>
          <ul className='main-list'>
            <li className='list-item'>
              <strong>Homonymous hemianopsia:</strong> This type of hemianopsia
              affects the same side of the visual field in both eyes. It is
              further classified into left or right homonymous hemianopsia,
              depending on which side is affected.
            </li>
            <li className='list-item'>
              <strong>Quadrantanopsia:</strong> Quadrantanopsia affects a
              quarter of the visual field, either the upper or lower half, and
              can occur in either one or both eyes. It is classified as either
              superior (upper) or inferior (lower) quadrantanopsia.
            </li>
          </ul>
        </article>

        <aside className='sidebar'>
          <h3 className='sidebar-heading'>
            Tips for Accommodating People with Hemianopsia
          </h3>
          <ul className='main-list'>
            <li className='list-item'>
              Keep pathways clear and well-lit to help individuals with
              hemianopsia navigate more easily.
            </li>
            <li className='list-item'>
              Use high-contrast colors and larger font sizes in written
              materials to improve readability.
            </li>
            <li className='list-item'>
              When talking to a person with hemianopsia, try to position
              yourself on their unaffected side to make eye contact easier.
            </li>
            <li className='list-item'>
              Offer assistance with tasks that may be difficult for someone with
              hemianopsia, such as reading small print or navigating unfamiliar
              spaces.
            </li>
            <li className='list-item'>
              Be patient and understanding, as individuals with hemianopsia may
              need more time to process visual information and complete tasks.
            </li>
            <li className='list-item'>
              Encourage the use of visual aids, such as magnifiers or screen
              readers, to help with reading and other visually-intensive tasks.
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default Hemianopsia;
