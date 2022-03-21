import uniq from "ramda/src/uniq";
import compose from "ramda/src/compose";
import sort from "ramda/src/sort";
import ascend from "ramda/src/ascend";
import prop from "ramda/src/prop";
import map from "ramda/src/map";

const byLabel = ascend(prop("label"));

const toOption = (label) => ({ label, value: label });

const mapToOptions = (arr) => arr.map(toOption);

export const getDronesOptions = compose(
  sort(byLabel),
  mapToOptions,
  uniq,
  map(prop("drone"))
);
export const getTechniciansOptions = compose(uniq, map(prop("technician")));
export const getPlatformsOptions = compose(
  sort(byLabel),
  mapToOptions,
  uniq,
  map(prop("platform"))
);

export const isValid = (values) => {
  // Check if the value is a string and not empty
  const isPropValid = (prop) => {
    return typeof values[prop] === "string" && values[prop].length > 0;
  };
  return Object.keys(values).every(isPropValid);
};
