import { site } from "@/data/site";

type Props = { selectedId: string; onChoose: (id: string) => void };

export default function Courses({ selectedId, onChoose }: Props) {
  const courses = selectedId ? site.courses.items.filter(course => course.id === selectedId) : site.courses.items;

  return <section id="courses" className="courses-section" aria-labelledby="courses-title">
    <div className="container">
      <div className="section-heading"><h2 id="courses-title">{site.courses.title}</h2><p>{site.courses.description}</p></div>
      <fieldset className="course-selector"><legend>{site.courses.selectorLabel}</legend><div className="filter-buttons">
        <button type="button" aria-pressed={!selectedId} onClick={() => onChoose("")}>{site.courses.allLabel}</button>
        {site.courses.items.map(course => <button type="button" key={course.id} aria-pressed={selectedId === course.id} onClick={() => onChoose(course.id)}>{course.shortTitle}</button>)}
      </div></fieldset>
      <p className="margin-note course-sample">{site.courses.sampleNote}</p>
      <div className={`course-grid ${selectedId ? "filtered" : ""}`}>
        {courses.map(course => <article className="batch-card" key={course.id}>
          <h3>{course.title.split(/(11–12)/).map((part, index) => index % 2 ? <span className="whitespace-nowrap" key={index}>{part}</span> : part)}</h3><p className="course-audience">{course.audience}</p>
          <p className="batch-time">{course.batch}</p>
          <div className="seat-row"><span>{course.seatsTaken} {site.courses.seatJoin} {course.seatsTotal} {site.courses.seatsLabel}</span><meter min={0} max={course.seatsTotal} value={course.seatsTaken} aria-label={`${course.title}: ${site.courses.seatAria}`} /></div>
          <p className="includes-label">{site.courses.includesLabel}</p><ul>{course.includes.map(item => <li key={item}>{item}</li>)}</ul>
          <div className="course-price"><p className="fee">{course.fee}</p><p>{course.feeNote}</p></div>
          <a className="button primary" href="#contact" onClick={() => onChoose(course.id)}>{site.courses.cta}</a>
          {selectedId === course.id && <p className="selection-note">{site.courses.selectedLabel}</p>}
        </article>)}
      </div>
    </div>
  </section>;
}
