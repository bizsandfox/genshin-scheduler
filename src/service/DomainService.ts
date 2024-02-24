import domains from "../datasource/domain.json";

interface domain {
  id: number;
  name: string;
  attr: number;
}

const DomainService = {
  getDomain(id: number): domain | undefined {
    return domains.lists.find((domain) => domain.id === id);
  },
};

export default DomainService;
