const INTERVAL = 100;

const hornAlert = () => {
  const horn = document.getElementsByClassName(
    "huntersHornView__timerState--type-ready"
  );
  const styles = window.getComputedStyle(horn[0]);
  const display = styles.display;

  if (display !== "none") {
    const audio = new Audio(
      "https://www.soundjay.com/buttons/sounds/button-1.mp3"
    );
    audio.volume = 0.1;
    audio.play();
  }
};

let checkElementInterval = setInterval(async () => {
  // Getting elements
  const pageFrame = document.getElementsByClassName("pageFrameView");
  if (!pageFrame) return;
  const pageSidebar = document.getElementsByClassName("pageSidebarView");
  if (!pageSidebar) return;
  const columns = document.getElementsByClassName("pageFrameView-column");
  if (!columns) return;
  const campPageBanner = document.getElementsByClassName("campPage-banner");
  if (!campPageBanner) return;
  const footer = document.getElementsByClassName("pageFrameView-footer");
  if (!footer) return;
  const header = document.getElementsByClassName("mousehuntHeaderView");
  if (!header) return;
  const easterEvent = document.getElementsByClassName("QuestSpringHuntCampHUD");
  if (!easterEvent) return;

  // We've got everything we need
  clearInterval(checkElementInterval);

  // Setting interveral for regular triggers
  setInterval(() => {
    // Remove the banner
    if (campPageBanner.length > 0) {
      campPageBanner[0].parentElement.removeChild(campPageBanner[0]);
    }

    hornAlert();
  }, INTERVAL * 10);

  // Hiding the sidebar and background
  pageFrame[0].style.gridTemplateColumns = "1fr";
  pageFrame[0].style.width = "760px";
  pageFrame[0].style.margin = "auto";
  pageSidebar[0].parentElement.removeChild(pageSidebar[0]);
  for (let i = columns.length - 1; i >= 0; i--) {
    columns[i].parentElement.removeChild(columns[i]);
  }

  // Remove the footer
  footer[0].parentElement.removeChild(footer[0]);

  // Remove the header
  header[0].parentElement.removeChild(header[0]);

  // Remove the easter event
  easterEvent[0].parentElement.removeChild(easterEvent[0]);
}, INTERVAL);
