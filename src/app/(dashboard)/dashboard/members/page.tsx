"use client";
import {
  groupSearchParamsSchema,
  searchParamsSchema,
} from "@/lib/validations/params";
// import { MemberTableShell } from "@/components/shell/member/member-data-table";
import { Nav } from "@/components/bread-crump";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/shell/page-header";
import { Shell } from "@/components/shell/shell";
import { AddMember } from "@/components/members/add-member";
import React, { Suspense, useEffect } from "react";
import { CreateButton } from "@/components/create-button";
import { DataTableSkeleton } from "@/components/data-table/data-table-skeleton";
interface Props {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}
export default function GroupPage({ searchParams }: Props) {
  const [showAddGroup, setAddShowGroup] = React.useState(false);
  const { page, per_page, sort, name } =
    groupSearchParamsSchema.parse(searchParams);

  // const { data, isLoading, refetch } =
  //   // useFetchData(`/api/groups?page=${page}&per_page=${per_page}&sort=${sort}&name=${name ?? ""}`, ["groups"]);
  // useEffect(() => {
  //   // Refetch when page, per_page, sort, or name changes
  //   refetch();
  // }, [searchParams, refetch]);
  const handleShowGroup = () => {
    setAddShowGroup(true);
  };

  // const pageCount = React.useMemo(() =>
  //   Math.ceil(data?.metadata?.count / data?.metadata?.per_page),
  //   [data]);
  return (
    < >
      <Nav items={[{ link: "/member", title: "Members" }]} >
      
          <CreateButton
            arial-label="create button"
            name="New Member"
            handleOpen={handleShowGroup}
          />
      </Nav>
      <Shell variant="sidebar" className="flex-1 px-4 sm:px-8 ">
        <div className=" space-y-4 overflow-auto">
          <PageHeader
            id="dashboard-group-page-header"
            aria-labelledby="dashboard-group-page-header-heading"
          >
            <div className="flex space-x-4">
              <PageHeaderHeading size="sm" className="flex-1">
                Groups
              </PageHeaderHeading>
            </div>
            <PageHeaderDescription size="sm">
              Manage your Groups.
            </PageHeaderDescription>
          </PageHeader>
            {/* {!!showAddGroup && (
              <AddMember
                setOpen={() => setAddShowGroup(false)}
                open={showAddGroup}
                refetch={refetch}
              />
            )} */}
          <Suspense fallback={
            <DataTableSkeleton
              columnCount={5}
              searchableColumnCount={1}
              filterableColumnCount={2}
              cellWidths={["10rem", "40rem", "12rem", "12rem", "8rem"]}
              shrinkZero
            />
          }>
            {/* <MemberTableShell
              data={data?.groupsWithMembers ?? []}
              pageCount={pageCount}
              refetch={refetch} /> */}
          </Suspense>
        </div>
      </Shell>
    </>
  );
}
