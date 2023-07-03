import { HttpStatuses } from '../application/enums/http-statuses.enum';
import HttpException from '../application/exceptions/http-exception';
import * as groupsModel from './groups.model';
import { IGroup } from './types/group.interface';

// export const getAllGroups = () => {
//   const groups = groupsModel.getAllGroups().map((group) => {
//     const studentsFromGroup = getAllStudents().filter(
//       (student) => student.groupId === group.id,
//     );
//     return { ...group, studentsFromGroup };
//   });
//   return groups;
// };

// export const getGroupById = (id: string) => {
//   const group = groupsModel.getGroupById(id);

//   if (!group) {
//     throw new HttpException(HttpStatuses.NOT_FOUND, 'Group not found');
//   }

//   const studentsFromGroup = getAllStudents().filter(
//     (student) => student.groupId === group.id,
//   );

//   return { ...group, studentsFromGroup };
// };

export const createGroup = (createGroupSchema: Omit<IGroup, 'id'>) => {
  return groupsModel.createGroup(createGroupSchema);
};

export const updateGroupById = (
  id: string,
  updateGroupSchema: Partial<IGroup>,
) => {
  const group = groupsModel.getGroupById(id);

  if (!group) {
    throw new HttpException(HttpStatuses.NOT_FOUND, 'Group not found');
  }

  return groupsModel.updateGroupById(id, updateGroupSchema);
};

export const deleteGroupById = (id: string) => {
  return groupsModel.deleteGroupById(id);
};
