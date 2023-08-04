import ButtonNew from "../ButtonNew";

export default function NewUserTab() {
  return (
    <div className="mt-[24px] min-h-full flex flex-col gap-[24px]">
      <div className="px-[25px] flex justify-end">
        <ButtonNew />
      </div>
      <div className="flex w-full border-t-[1px]">
        <div className="flex-none">
          Photo Profile
        </div>

        <div>
          <form action="">
            <label htmlFor="fullName">Full Name</label>
            <input type="text" name="fullName"/>
          </form>
        </div>
      </div>
    </div>
  )
}
