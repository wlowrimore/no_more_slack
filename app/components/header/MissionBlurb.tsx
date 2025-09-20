import TextTruncator from "@/lib/helpers/TextTruncator";

const MissionBlurb = () => {
  const missionText = `Our mission is to empower "We the People" by providing an
          unyielding platform for the free exchange of political thought and
          opinion. In a world of increasing political division and filtered
          information, we believe that a healthy democracy depends on the
          ability of every citizen to exercise their right to freedom of speech.
          This platform is built on the core principle that all voices,
          regardless of political affiliation or perspective, deserve to be
          heard and engaged with respectfully. We are dedicated to fostering a
          community where open dialogue and genuine debate can thrive, helping
          to bridge divides and cultivate a more informed and engaged citizenry.`;

  return (
    <main className="">
      <article>
        <TextTruncator
          text={missionText}
          wordLimit={38}
          linkText="...read further"
          linkHref="/mission-statement"
          className="text-sm text-amber-100 tracking-wider"
        />
      </article>
    </main>
  );
};

export default MissionBlurb;
