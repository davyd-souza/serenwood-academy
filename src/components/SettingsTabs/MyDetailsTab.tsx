// COMPONENT
import { InputField, InputPrefix, InputRoot } from '@/components/Form/Input'
import {
  FileInputRoot,
  FileInputTrigger,
  FileInputControl,
  FileInputImagePreview,
  FileInputList,
} from '@/components/Form/FileInput'
import { CountrySelect } from '@/app/(home)/CountrySelect'
import { TimezoneSelect } from '@/app/(home)/TimezoneSelect'
import { BioTextEditor } from '@/app/(home)/BioTextEditor'

// ASSET
import { Mail } from 'lucide-react'

export function MyDetailsTab() {
  return (
    <section className="space-y-6 py-8">
      <header className="flex justify-between gap-4 border-b border-zinc-200 pb-5 dark:border-zinc-800">
        <div className="space-y-1">
          <h2 className="text-lg font-medium">Personal info</h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-300">
            Update your photo and personal details here.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:hover:bg-zinc-800"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-lg bg-sky-500 px-4 py-2 text-sm font-medium text-zinc-100 transition-colors hover:bg-sky-400 dark:bg-sky-400 dark:text-zinc-900"
          >
            Save
          </button>
        </div>
      </header>

      <form
        id="my-details"
        className="flex w-full flex-col gap-5 divide-y divide-zinc-200 dark:divide-zinc-800"
      >
        <div className="grid grid-cols-form gap-8">
          <label htmlFor="first-name" className="text-sm font-medium">
            Name
          </label>
          <div className="grid grid-cols-2 gap-6">
            <InputRoot>
              <InputField id="first-name" type="text" placeholder="Davyd" />
            </InputRoot>

            <InputRoot>
              <InputField id="last-name" type="text" placeholder="Souza" />
            </InputRoot>
          </div>
        </div>

        <div className="grid grid-cols-form gap-8 pt-5">
          <label htmlFor="email" className="text-sm font-medium">
            Email address
          </label>
          <InputRoot>
            <InputPrefix asChild>
              <Mail className="h-5 min-h-max w-5 min-w-max text-zinc-500 dark:text-zinc-400" />
            </InputPrefix>
            <InputField id="email" type="email" placeholder="email@mail.com" />
          </InputRoot>
        </div>

        <div className="grid grid-cols-form gap-8 pt-5">
          <label htmlFor="photo" className="text-sm font-medium">
            Your photo
            <span className="block text-sm font-normal text-zinc-500 dark:text-zinc-300">
              This will be displayed on your profile.
            </span>
          </label>

          <FileInputRoot className="flex items-start gap-5">
            <FileInputImagePreview />
            <FileInputTrigger />
            <FileInputControl />
          </FileInputRoot>
        </div>

        <div className="grid grid-cols-form gap-8 pt-5">
          <label htmlFor="role" className="text-sm font-medium">
            Role
          </label>
          <InputRoot>
            <InputField
              id="role"
              type="text"
              placeholder="ex.: Product Manager"
            />
          </InputRoot>
        </div>

        <div className="grid grid-cols-form gap-8 pt-5">
          <label htmlFor="country" className="text-sm font-medium">
            Country
          </label>
          <CountrySelect />
        </div>

        <div className="grid grid-cols-form gap-8 pt-5">
          <label htmlFor="timezone" className="text-sm font-medium">
            Timezone
          </label>

          <TimezoneSelect />
        </div>

        <div className="grid grid-cols-form gap-8 pt-5">
          <label htmlFor="bio" className="text-sm font-medium">
            Bio
            <span className="block text-sm font-normal text-zinc-500 dark:text-zinc-300">
              Write a short introduction.
            </span>
          </label>

          <BioTextEditor />
        </div>

        <div className="grid grid-cols-form gap-8 pt-5">
          <label htmlFor="portfolio" className="text-sm font-medium">
            Portfolio projects
            <span className="block text-sm font-normal text-zinc-500 dark:text-zinc-300">
              Share a few snippets of your work.
            </span>
          </label>
          <FileInputRoot>
            <FileInputTrigger />
            <FileInputList />
            <FileInputControl multiple />
          </FileInputRoot>
        </div>
      </form>

      <footer className="flex items-center justify-end gap-3 border-t border-zinc-200 pt-4 dark:border-zinc-700">
        <button
          type="button"
          className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:hover:bg-zinc-800"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-lg bg-sky-500 px-4 py-2 text-sm font-medium text-zinc-100 transition-colors hover:bg-sky-400 dark:bg-sky-400 dark:text-zinc-900"
        >
          Save
        </button>
      </footer>
    </section>
  )
}
