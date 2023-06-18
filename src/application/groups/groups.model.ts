import ObjectID from 'bson-objectid';
import { IGroup } from './types/group.interface';

const groups: IGroup[] = [
  {
    id: ObjectID().toHexString(),
    name: 'Group1',
  },
  {
    id: ObjectID().toHexString(),
    name: 'Group2',
  },
];

export const getAllGroups = (): IGroup[] => {
  return groups;
};

export const getGroupById = (studentId: string): IGroup | undefined => {
  return groups.find(({ id }) => id === studentId);
};

export const createGroup = (createGroupSchema: Omit<IGroup, 'id'>): IGroup => {
  const newGroup = {
    ...createGroupSchema,
    id: ObjectID().toHexString(),
  };

  groups.push(newGroup);

  return newGroup;
};

export const updateGroupById = (
  groupId: string,
  updateGroupSchema: Partial<IGroup>,
): IGroup | undefined => {
  const groupIndex = groups.findIndex(({ id }) => id === groupId);
  const group = groups[groupIndex];

  if (!group) {
    return;
  }

  const updatedGroup = {
    ...group,
    ...updateGroupSchema,
  };

  groups.splice(groupIndex, 1, updatedGroup);

  return updatedGroup;
};

export const deleteGroupById = (groupId: string): IGroup | undefined => {
  const groupIndex = groups.findIndex(({ id }) => id === groupId);
  const group = groups[groupIndex];

  if (!group) {
    return;
  }

  groups.splice(groupIndex, 1);

  return group;
};
