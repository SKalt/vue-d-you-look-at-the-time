export const isDate = {
  validator(value) {
    return !Number.isNaN(new Date(value));
  }
};

export const stringOrNumber = {
  type: [String, Number]
}
