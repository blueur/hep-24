import React from "react";

export default class CurrentCalendar extends React.Component {
  componentDidMount() {
    const currentDate = new Date();
    const currentDay = currentDate.getDay();
    currentDate.setDate(currentDate.getDate() - currentDay);
    Array.from(document.querySelectorAll("td:first-child"))
      .filter((element) => {
        const elementDate = new Date(element.textContent);
        elementDate.setDate(elementDate.getDate() - elementDate.getDay());
        return elementDate.toDateString() === currentDate.toDateString();
      })
      .forEach((element) => {
        const parent = element.parentElement;
        let className: string;
        switch (currentDay) {
          case 0:
            className = "weekend-before";
            break;
          case 6:
            className = "weekend-after";
            break;
          default:
            className = "week";
            break;
        }
        parent.classList.add("current", className);
        parent.scrollIntoView({ behavior: "smooth" });
      });
  }
  render() {
    return this.props.children;
  }
}
