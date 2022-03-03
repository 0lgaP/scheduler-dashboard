import React from "react";

import classnames from "classnames";
import Loading from "./Loading";
import Panel from "./Panel";
import { useState } from "react";

const data = [
  {
    id: 1,
    label: "Total Interviews",
    value: 6
  },
  {
    id: 2,
    label: "Least Popular Time Slot",
    value: "1pm"
  },
  {
    id: 3,
    label: "Most Popular Day",
    value: "Wednesday"
  },
  {
    id: 4,
    label: "Interviews Per Day",
    value: "2.3"
  }
];

function DashboardModern() {
  const [state, setState] = useState({
    loading: false,
    focused: null
  });

  function selectPanel(id) {
    const focus = state.focused !== null ? null : id
      setState(prev => ({
      ...prev,
      focused : focus
    }));
  }

  const dashboardClasses = classnames("dashboard", {
    "dashboard--focused": state.focused
  });

  const eachPanel = data
                        .filter((panel) => state.focused === null || state.focused === panel.id)
                        .map((panel) => <Panel 
                                        key={panel.id} 
                                        id={panel.id} 
                                        label={panel.label} 
                                        value={panel.value}
                                        onSelect={() => selectPanel(panel.id)}
                                        />)

if(state.loading) {
return <Loading/>;
}
return <main className={dashboardClasses}>
{eachPanel}
</main>;

}

export default DashboardModern;
